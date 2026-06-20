"use client";

import { useState } from "react";

type Disponibilite = {
  date: string;
  disponible: boolean;
};

export default function CalendrierDisponibilites({
  disponibilites,
  prixNuit,
}: {
  disponibilites: Disponibilite[];
  prixNuit: number;
}) {
  const [dateDebut, setDateDebut] = useState<string | null>(null);
  const [dateFin, setDateFin] = useState<string | null>(null);

  // Grouper par mois
  const parMois = disponibilites.reduce<Record<string, Disponibilite[]>>(
    (acc, d) => {
      const mois = d.date.slice(0, 7);
      if (!acc[mois]) acc[mois] = [];
      acc[mois].push(d);
      return acc;
    },
    {}
  );

  const nomMois = (cle: string) => {
    const [annee, mois] = cle.split("-");
    const date = new Date(Number(annee), Number(mois) - 1);
    return date.toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
    });
  };

  const handleClick = (date: string, disponible: boolean) => {
    if (!disponible) return;

    // Toggle: cliquer sur une date déjà sélectionnée la désélectionne
    if (date === dateDebut && !dateFin) {
      setDateDebut(null);
      return;
    }
    if (date === dateDebut && dateFin) {
      setDateDebut(dateFin);
      setDateFin(null);
      return;
    }
    if (date === dateFin) {
      setDateFin(null);
      return;
    }

    // Sélection normale
    if (!dateDebut || (dateDebut && dateFin)) {
      setDateDebut(date);
      setDateFin(null);
    } else {
      if (date > dateDebut) {
        const entreDeuxDates = disponibilites.filter(
          (d) => d.date > dateDebut && d.date <= date
        );
        const toutDisponible = entreDeuxDates.every((d) => d.disponible);
        if (toutDisponible) {
          setDateFin(date);
        }
      } else {
        setDateDebut(date);
        setDateFin(null);
      }
    }
  };

  const isInRange = (date: string) => {
    if (!dateDebut || !dateFin) return false;
    return date >= dateDebut && date <= dateFin;
  };

  const nombreNuits =
    dateDebut && dateFin
      ? Math.ceil(
          (new Date(dateFin).getTime() - new Date(dateDebut).getTime()) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const moisEntries = Object.entries(parMois);

  return (
    <div>
      {/* Compteur de prix en temps réel — toujours visible */}
      <div className="bg-sand-50 border border-sand-200 p-5 mb-8 rounded">
        {dateDebut && dateFin ? (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="text-sm font-light text-charcoal/70">
              <span className="font-medium text-charcoal">
                {formatDate(dateDebut)}
              </span>
              {" → "}
              <span className="font-medium text-charcoal">
                {formatDate(dateFin)}
              </span>
            </div>
            <div className="text-right">
              <p className="text-xl font-medium text-charcoal">
                {(nombreNuits * prixNuit).toLocaleString("fr-FR")} MAD
              </p>
              <p className="text-xs text-charcoal/50">
                {nombreNuits} nuit{nombreNuits > 1 ? "s" : ""} x{" "}
                {prixNuit.toLocaleString("fr-FR")} MAD
              </p>
            </div>
          </div>
        ) : dateDebut ? (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-sm font-light text-charcoal/70">
              Arrivee :{" "}
              <span className="font-medium text-charcoal">
                {formatDate(dateDebut)}
              </span>
            </p>
            <p className="text-sm text-charcoal/50 italic">
              Selectionnez une date de depart
            </p>
          </div>
        ) : (
          <p className="text-sm font-light text-charcoal/50 text-center">
            Selectionnez vos dates de sejour sur le calendrier
          </p>
        )}
      </div>

      {/* Legende */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 text-xs font-light text-charcoal/60">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 bg-sand-50 border border-sand-300 rounded" />
          <span>Disponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 bg-sand-200 border border-sand-300 rounded opacity-50" />
          <span>Indisponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 bg-gold/30 border border-gold rounded" />
          <span>Selection</span>
        </div>
      </div>

      {/* Calendrier — grille responsive : 1 col mobile, 2 col desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
        {moisEntries.map(([mois, jours]) => {
          const premierJour = new Date(jours[0].date);
          const jourSemaine = (premierJour.getDay() + 6) % 7;

          return (
            <div key={mois}>
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-charcoal mb-3 capitalize">
                {nomMois(mois)}
              </h3>

              <div className="grid grid-cols-7 gap-1 mb-1">
                {["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"].map((j) => (
                  <div
                    key={j}
                    className="text-center text-[11px] font-light text-charcoal/40 py-0.5"
                  >
                    {j}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: jourSemaine }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}

                {jours.map((d) => {
                  const jour = new Date(d.date).getDate();
                  const selected = d.date === dateDebut || d.date === dateFin;
                  const inRange = isInRange(d.date);

                  return (
                    <button
                      key={d.date}
                      onClick={() => handleClick(d.date, d.disponible)}
                      disabled={!d.disponible}
                      className={`
                        py-2 sm:py-2.5 text-xs sm:text-sm rounded transition-all duration-200
                        ${
                          selected
                            ? "bg-gold text-charcoal font-medium"
                            : inRange
                              ? "bg-gold/20 text-charcoal"
                              : d.disponible
                                ? "bg-sand-50 border border-sand-200 text-charcoal hover:border-gold hover:bg-gold/5 cursor-pointer"
                                : "bg-sand-100 text-charcoal/30 cursor-not-allowed line-through"
                        }
                      `}
                    >
                      {jour}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bouton de réservation */}
      {dateDebut && dateFin && (
        <div className="mt-8 text-center">
          <a
            href={`/contact?dates=${dateDebut}_${dateFin}&nuits=${nombreNuits}&montant=${nombreNuits * prixNuit}`}
            className="inline-block bg-gold text-charcoal px-10 py-4 text-sm font-medium tracking-wide hover:bg-gold-light transition-all duration-300"
          >
            Demander une reservation &middot;{" "}
            {(nombreNuits * prixNuit).toLocaleString("fr-FR")} MAD
          </a>
        </div>
      )}
    </div>
  );
}
