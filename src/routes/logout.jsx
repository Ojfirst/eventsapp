import { redirect } from "react-router";

const logoutAction = async ({ request }) => {
  const url = new URL(request.url);
  const mode = (url.searchParams.get('mode') || 'logout').toLowerCase();

  if (mode !== 'logout') {
    throw new Response(JSON.stringify({ message: 'Unsupported mode' }), {
      status: 422,
    });
  }

  // Clear local storage
  localStorage.clear();
  console.log('User logged out successfully');
  return redirect('/');
}

export default logoutAction;