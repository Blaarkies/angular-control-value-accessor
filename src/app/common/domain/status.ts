export class Status {

    value: 'idle' | 'pending' | 'success' | 'error' = 'idle';

    get idle(): boolean {
        return this.value === 'idle';
    }

    get pending(): boolean {
        return this.value === 'pending';
    }

    get success(): boolean {
        return this.value === 'success';
    }

    get error(): boolean {
        return this.value === 'error';
    }

    setIdle() {
        this.value = 'idle';
    }

    setPending() {
        this.value = 'pending';
    }

    setSuccess() {
        this.value = 'success';
    }

    setError() {
        this.value = 'error';
    }
}
