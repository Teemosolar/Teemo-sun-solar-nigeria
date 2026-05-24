export interface SolarPackage {
  id: string;
  name: string;
  capacity: string;
  batteries: string;
  price: string;
  features: string[];
  loads: string[];
  warranty: {
    battery: string;
    inverter: string;
  };
  recommendedFor: string;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: "energy" | "engineering" | "sales" | "training" | "transport";
  features: string[];
  iconName: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  capacity?: string;
  location: string;
  systemType: string;
  completionDate: string;
  highlights: string[];
  imageUrl: string;
  description: string;
}

export interface IndustryItem {
  name: string;
  iconName: string;
  description: string;
}
