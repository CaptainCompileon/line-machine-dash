export interface Machine {
    name: string;
    iconName: string;
    state: MachineState
}

const MACHINE_STATE_VALUES = ['running', 'alarm', 'warning'] as const;

export type MachineState = typeof MACHINE_STATE_VALUES[number];