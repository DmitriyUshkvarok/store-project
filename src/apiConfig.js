let protocol = '';

if (typeof window !== 'undefined') {
  protocol = window.location.protocol;
}

export const baseUrl = `${protocol}/api`;
