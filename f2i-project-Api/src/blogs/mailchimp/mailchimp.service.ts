import { Injectable } from '@nestjs/common';
const mailchimp = require('@mailchimp/mailchimp_marketing');

@Injectable()
export class MailchimpService {
  constructor() {
    mailchimp.setConfig({
      apiKey: '563ccedfeec8adc7f3943958195a384a-us21',
      server: 'us21',
    });
  }

  async addSubscriber(email: string): Promise<any> {
    try {
      const response = await mailchimp.lists.addListMember('3cf4533c02', {
        email_address: email,
        status: 'subscribed',
      });
      return response;
    } catch (error) {
      console.error('Mailchimp API error', error.response?.data || error);
      throw new Error('Error adding subscriber: ' + error.message);
    }
  }
}
