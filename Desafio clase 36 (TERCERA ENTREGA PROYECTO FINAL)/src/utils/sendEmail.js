import nodemailer from "nodemailer";

const sendVerificationEmail = async (adminEmail, userEmail, data) => {
    console.log(adminEmail, userEmail, data);
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: '"E-Commerce - Backend',
            to: adminEmail,
            subject: `Nuevo pedido de ${userEmail}`,
            html: `
                <ul>
                    ${data.map(product => `
                        <li>
                            <img src="${product.tumbnail}" alt="${product.title}">
                            <p>${product.title}</p>
                            <p>${product.price}</p>
                        </li>
                    `).join("")}
                </ul>
        `,
        };

        return await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
    }
}

export default sendVerificationEmail;