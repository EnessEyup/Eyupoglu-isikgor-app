import axios from 'axios';
import { logger } from '../utils/logger';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

class OpenAIService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async generateResponse(userMessage) {
    try {
      const response = await axios.post(
        OPENAI_API_URL,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content:
                'Sen bir hukuk asistanısın. Türkiye hukuk sistemi hakkında bilgi sahibisin. Cevapların kısa, öz ve anlaşılır olmalı. Kesin hukuki tavsiyeler vermek yerine, genel bilgiler ve yönlendirmeler yapmalısın. Her zaman profesyonel bir avukata danışılması gerektiğini belirtmelisin.',
            },
            {
              role: 'user',
              content: userMessage,
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      logger.error('OpenAI API Error:', error);
      throw new Error(
        'Üzgünüm, şu anda cevap üretemiyorum. Lütfen daha sonra tekrar deneyin.',
      );
    }
  }
}

export default OpenAIService;
