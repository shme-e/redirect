import { setRedirect } from '$lib/server/redirect-server';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const redirectUrl = data.get('redirectUrl');

        await setRedirect(redirectUrl);
    }
}