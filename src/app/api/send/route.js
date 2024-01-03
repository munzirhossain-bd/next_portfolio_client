import { EmailTemplate } from "@/app/components/email/contact-form";
import { Resend } from 'resend';
import {NextResponse} from "next/server";
import Result from "postcss/lib/result";

const resend = new Resend('re_VZ7egMKo_3MXj13A2S2iCRPY2Vn8MWchU');
export async function POST(request) {
    try {
      const result=await request.json();
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'John' }),
      });
  
      return NextResponse.json({data});
    } catch (error) {
      return NextResponse.json({ error });
    }
  };

