import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ cookies }) => {
  const cookieValue = cookies.get('userInput') || '';
  return { cookieValue };
};

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    const userInput = formData.get('userInput') as string;

    cookies.set('userInput', userInput, {
      path: '/',
      httpOnly: false,
      maxAge: 30 // 確認用のため短く設定
    });

    return { success: true, userInput };
  }
};