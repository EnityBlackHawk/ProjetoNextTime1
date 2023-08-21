import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nome, email, telefone, mensagem } = req.body;

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "gabrielabarbieri09@gmail.com",
                pass: "asjxbmuxcceatueo",
            },
        });

        const mailOptions = {
            from: "gabrielabarbieri09@gmail.com",
            to: "gabrielabarbieri09@gmail.com",
            subject: "Novo formulário de contato",
            text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email enviado com sucesso!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro ao enviar o email.' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}