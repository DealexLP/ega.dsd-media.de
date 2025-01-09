import {NextResponse} from 'next/server';
import axios from "axios";

interface IRequest {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    message: string;
}

export const POST = async (req: Request): Promise<NextResponse> => {
    try {
        const body = await req.json() as IRequest;
        const {firstName, lastName, emailAddress, phoneNumber, message} = body;

        if (!firstName || !lastName || !emailAddress || !phoneNumber || !message) {
            return NextResponse.json({message: 'Missing required fields'}, {status: 400});
        }

        const response = await axios({
            url: `https://portal.dsd-media.de/api/v1/public/contacts`,
            method: 'post',
            data: {
                firstName,
                lastName,
                emailAddress,
                phoneNumber,
                message
            },
            headers: {
                'Authorization': "PEGHxmubO6pqwBc0GQVN1qiSQms3Mbhko",
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        return NextResponse.json({message: 'Email sent successfully'}, {status: 200});
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({message: 'Internal Server Error', error}, {status: 500});
    }
};