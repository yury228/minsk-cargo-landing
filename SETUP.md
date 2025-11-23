# Инструкция по настройке

## Быстрый старт

1. Установите зависимости:
```bash
npm install
```

2. Запустите dev-сервер:
```bash
npm run dev
```

3. Откройте [http://localhost:3000](http://localhost:3000)

## Настройка аналитики

### Google Analytics

1. Создайте аккаунт в [Google Analytics](https://analytics.google.com/)
2. Получите Measurement ID (формат: `G-XXXXXXXXXX`)
3. Откройте `components/analytics.tsx` и замените `GA_MEASUREMENT_ID`
4. Или создайте файл `.env.local` и добавьте:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Яндекс.Метрика

1. Создайте счётчик в [Яндекс.Метрике](https://metrika.yandex.ru/)
2. Получите ID счётчика (число)
3. Откройте `components/analytics.tsx` и замените `YANDEX_METRIKA_ID`
4. Или создайте файл `.env.local` и добавьте:
```
NEXT_PUBLIC_YANDEX_METRIKA_ID=XXXXXXXX
```

## Настройка контактов

Обновите контактную информацию в следующих файлах:
- `components/header.tsx` - константа `PHONE_NUMBER`
- `components/hero.tsx` - константа `PHONE_NUMBER`
- `components/contact.tsx` - константы `PHONE_NUMBER`, `PHONE_DISPLAY`, `EMAIL`, `ADDRESS`
- `components/footer.tsx` - константы `PHONE_NUMBER`, `PHONE_DISPLAY`

## Настройка SEO

1. Откройте `app/layout.tsx`
2. Обновите `metadataBase` на ваш реальный домен
3. Добавьте коды верификации в секцию `verification`:
```typescript
verification: {
  google: 'your-google-verification-code',
  yandex: 'your-yandex-verification-code',
},
```

## Деплой на Vercel

1. Загрузите код в GitHub/GitLab/Bitbucket
2. Перейдите на [vercel.com](https://vercel.com)
3. Импортируйте проект
4. Vercel автоматически определит Next.js и настроит сборку
5. Добавьте переменные окружения в настройках проекта (если используете)

## Переменные окружения

Создайте файл `.env.local` (не коммитьте в git):

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_METRIKA_ID=XXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Кастомизация

### Цвета темы

Цвета настраиваются в `app/globals.css` в секции `:root` и `.dark`.

### Контент

- Услуги: `components/services.tsx`
- О нас: `components/about.tsx`
- Контакты: `components/contact.tsx`

## Поддержка

При возникновении проблем проверьте:
- Версии Node.js (рекомендуется 18+)
- Установлены ли все зависимости
- Корректность путей импортов

