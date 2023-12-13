import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { IsAdminPipe } from './users/pipe/is-admin.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
<<<<<<< HEAD
  origin: 'https://dsp-archiwebo22b-ah-em-ii-oe.dspthetiptop.fr',
=======
    origin: 'http://localhost:5173',
>>>>>>> c482556aa574080a006ef53f4a45bb325122b8d6
    credentials: true,
    methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  app.setGlobalPrefix('api');
   //app.useGlobalPipes(new IsAdminPipe());
  dotenv.config();
<<<<<<< HEAD
    app.use((req, res, next) => {
      if (req.path === '/api') {
        return basicAuth({
          challenge: true,
          users: {
            [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
          },
        })(req, res, next);
      }
      next();
    });
=======
  app.use((req, res, next) => {
    if (req.path === '/api') {
      return basicAuth({
        challenge: true,
        users: {
          [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
        },
      })(req, res, next);
    }
    next();
  });
>>>>>>> c482556aa574080a006ef53f4a45bb325122b8d6
  const config = new DocumentBuilder()
    .setTitle('TipTop Api')
    .setDescription('The TipTop API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        name: 'Authorization',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'jwt',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);
  await app.listen(3001);
}
bootstrap();
