import {
  Brain, BarChart3, ShieldCheck, Cloud, Cpu, Database, Layers, Zap, Users, Target, Compass, Sparkles, Bot, Lock,
  Globe, Rocket, Workflow, Eye, HeartPulse, Scale, CheckCircle2, Code2, MessageSquare, Server, TrendingUp, Factory,
  Truck, ShoppingCart, Landmark, Hospital, Leaf, Search, BookOpen, Award, Handshake, Clock, Lightbulb, Settings,
  FileText, Image as ImageIcon, Gauge, Network, AlertTriangle, DollarSign, RefreshCw, Puzzle, type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/types";

const map: Record<IconName, LucideIcon> = {
  brain: Brain, chart: BarChart3, shield: ShieldCheck, cloud: Cloud, cpu: Cpu, database: Database, layers: Layers,
  zap: Zap, users: Users, target: Target, compass: Compass, sparkles: Sparkles, bot: Bot, lock: Lock, globe: Globe,
  rocket: Rocket, workflow: Workflow, eye: Eye, heart: HeartPulse, scale: Scale, check: CheckCircle2, code: Code2,
  message: MessageSquare, server: Server, trend: TrendingUp, factory: Factory, truck: Truck, cart: ShoppingCart,
  bank: Landmark, hospital: Hospital, leaf: Leaf, search: Search, book: BookOpen, award: Award, handshake: Handshake,
  clock: Clock, lightbulb: Lightbulb, settings: Settings, file: FileText, image: ImageIcon, gauge: Gauge,
  network: Network, alert: AlertTriangle, dollar: DollarSign, refresh: RefreshCw, puzzle: Puzzle,
};

const fallback: IconName[] = ["sparkles", "brain", "chart", "shield", "cloud", "layers", "zap", "target"];

export default function Icon({ name, index = 0, className = "h-5 w-5" }: { name?: IconName; index?: number; className?: string }) {
  const C = map[name ?? fallback[index % fallback.length]] ?? Sparkles;
  return <C className={className} strokeWidth={1.6} />;
}
