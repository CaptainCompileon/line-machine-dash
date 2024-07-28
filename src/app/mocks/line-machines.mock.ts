import { Machine } from '../types/app.types';

export const LINE_MACHINES_MOCK: Machine[] = [
    {
        name: 'Scale',
        iconName: 'system_update_alt',
        state: 'running',
    },
    {
        name: 'Attacher',
        iconName: 'chrome_reader_mode',
        state: 'alarm',
    },
    {
        name: 'Packer',
        iconName: 'call_to_action',
        state: 'running',
    },
    {
        name: 'Closer',
        iconName: 'grid_on',
        state: 'warning',
    },
];
