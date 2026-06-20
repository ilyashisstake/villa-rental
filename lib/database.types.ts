export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      disponibilites: {
        Row: {
          created_at: string | null
          date: string
          disponible: boolean
          id: string
          villa_id: string
        }
        Insert: {
          created_at?: string | null
          date: string
          disponible?: boolean
          id?: string
          villa_id: string
        }
        Update: {
          created_at?: string | null
          date?: string
          disponible?: boolean
          id?: string
          villa_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "disponibilites_villa_id_fkey"
            columns: ["villa_id"]
            isOneToOne: false
            referencedRelation: "villas"
            referencedColumns: ["id"]
          },
        ]
      }
      photos: {
        Row: {
          alt_text: string | null
          created_at: string | null
          id: string
          ordre: number
          url: string
          villa_id: string
        }
        Insert: {
          alt_text?: string | null
          created_at?: string | null
          id?: string
          ordre?: number
          url: string
          villa_id: string
        }
        Update: {
          alt_text?: string | null
          created_at?: string | null
          id?: string
          ordre?: number
          url?: string
          villa_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "photos_villa_id_fkey"
            columns: ["villa_id"]
            isOneToOne: false
            referencedRelation: "villas"
            referencedColumns: ["id"]
          },
        ]
      }
      reservations: {
        Row: {
          created_at: string | null
          date_debut: string
          date_fin: string
          email_client: string
          id: string
          montant: number
          statut: string
          stripe_id: string | null
          updated_at: string | null
          villa_id: string
        }
        Insert: {
          created_at?: string | null
          date_debut: string
          date_fin: string
          email_client: string
          id?: string
          montant: number
          statut?: string
          stripe_id?: string | null
          updated_at?: string | null
          villa_id: string
        }
        Update: {
          created_at?: string | null
          date_debut?: string
          date_fin?: string
          email_client?: string
          id?: string
          montant?: number
          statut?: string
          stripe_id?: string | null
          updated_at?: string | null
          villa_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reservations_villa_id_fkey"
            columns: ["villa_id"]
            isOneToOne: false
            referencedRelation: "villas"
            referencedColumns: ["id"]
          },
        ]
      }
      villas: {
        Row: {
          capacite: number
          created_at: string | null
          description: string | null
          equipements: string[] | null
          id: string
          nom: string
          prix_nuit: number
          updated_at: string | null
        }
        Insert: {
          capacite: number
          created_at?: string | null
          description?: string | null
          equipements?: string[] | null
          id?: string
          nom: string
          prix_nuit: number
          updated_at?: string | null
        }
        Update: {
          capacite?: number
          created_at?: string | null
          description?: string | null
          equipements?: string[] | null
          id?: string
          nom?: string
          prix_nuit?: number
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never
