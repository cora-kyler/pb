import { getAllCompanies } from '$lib/data/companies';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const companies = getAllCompanies();
	return { companies };
};
