export const createApiFixture =
  ApiService =>
  async ({ playwright}, use) => {
    // Создаём аутентифицированный APIRequestContext с токеном
    const requestContext = await playwright.request.newContext({
      baseURL: 'https://thinking-tester-contact-list.herokuapp.com', // Замените на ваш базовый URL
      extraHTTPHeaders: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    // Инициализируем ваш сервис с этим контекстом
    await use(new ApiService(requestContext));

    // Очистка
    await requestContext.dispose();
  };
