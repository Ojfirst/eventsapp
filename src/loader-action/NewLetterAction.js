const newsLetterAction = async ({ request }) => {
  console.log('Action was triggered');
  // Extract provided emmail, which can be sent to the backend
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}

export default newsLetterAction;