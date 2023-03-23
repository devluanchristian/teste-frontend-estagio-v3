export interface IEquipment {
  id: string;
  equipmentModelId?: string;
  name: string;
}

export interface IEquipmentModel {
  id: string;
  name: string;
  hourlyEarnings: {
    value: number;
    equipmentStateId: string;
  }[];
}
export interface IHourlyEarnings {
  value: number;
  equipmentStateId: string;
}

export interface IEquipmentPositionHistory {
  equipmentId: string;
  positions: {
    date: string;
    lat: number;
    lon: number;
  }[];
}
export interface IPosition {
  date: string;
  lat: number;
  lon: number;
}

export interface IEquipmentState {
  id: string;
  name: string;
  color: string;
}

export interface IEquipmentStateHistory {
  equipmentId: string;
  states: {
    date: string;
    equipmentStateId: string;
  };
}

export interface IEquipmentStateId {
  date: string;
  equipmentStateId: string;
}
