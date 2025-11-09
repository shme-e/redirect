import fs from 'fs/promises';

export async function setRedirect(redirectUrl: string) {
    const date = new Date().toISOString().replace(/:/g, '-').split('.')[0];

    try {
        await fs.copyFile('/redirect/current.txt', `/redirect/previous-${date}.txt`);
    } catch {
        // file does not exist, ignore
    }

    await fs.writeFile('/redirect/current.txt', redirectUrl);
}

export async function getRedirect(): Promise<string> {
    const redirectUrl = await fs.readFile('/redirect/current.txt', 'utf-8');
    return redirectUrl.trim();
}