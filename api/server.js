export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { action, hwid } = req.body;

        if (action === 'checkHWID') {
            // DAFTAR HWID YANG DIIZINKAN DI SINI
            const validHwids = [
                "172820596"  // Ini HWID Anda dari screenshot sebelumnya
            ];

            if (validHwids.includes(hwid)) {
                return res.status(200).json({ valid: true, displayName: 'User Parben' });
            } else {
                return res.status(200).json({ valid: false });
            }
        }
        return res.status(400).json({ error: 'Bad Request' });
    } 
    res.status(200).send('Server Parben Aktif!');
}
