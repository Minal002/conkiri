import { setupWorker } from 'msw'; // 경로를 단순화
import { handlers } from '@/mocks';

export const worker = setupWorker(...handlers);
