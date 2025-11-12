import { Resend } from 'resend';
// import { Email } from './email';
import { NextResponse } from 'next/server';
import EmailTemplate from '@/emails';
import nodemailer from 'nodemailer'


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req){
    
    const response = await req.json();
    try{
        const data =  await resend.emails.send({
            from: 'tabdelnaby06@gmail.com',
            to: [response.data?.Email],
            subject: 'Appoinment Booking Information',
            react: EmailTemplate({response}),
          });
        return NextResponse.json({data})
    }
    catch(error)
    {
        return NextResponse.json({error})
    }
}
