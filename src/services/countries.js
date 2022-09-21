import { checkError, client } from './client';

export async function fetchCountries() {
  const res = await client.from('countries').select('*');
  return checkError(res);
}
