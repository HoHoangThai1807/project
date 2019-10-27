import { validateAdminCreation } from '../utils/validate';
describe('Unit tests for validateAdminCreation', () => {
  test('Email is null', () => {
    expect(() => {
      validateAdminCreation(null,'passwrod', 'confirmpassword', 'key');
    }).toThrowError('Email is required');
  });

  test('password is null', () => {
    expect(() => {
      validateAdminCreation('email',null, 'confirmpassword', 'key');
    }).toThrowError('Password is required');
  });

  test('key is null', () => {
    expect(() => {
      validateAdminCreation('email','password', 'confirmpassword', null);
    }).toThrowError('Key is required');
  });

  test('invalid email', () => {
    expect(() => {
      validateAdminCreation('invalidemail','password', 'confirmpassword', 'key');
    }).toThrowError('invalid email');
  });

  test('password is shorter than 6 chars', () => {
    expect(() => {
      validateAdminCreation('validemail@gmail.com','passs', 'confirmpassword', 'key');
    }).toThrowError('password must be longer than 6 characters');
  });

  test('password is longer than 20 chars', () => {
    expect(() => {
      validateAdminCreation('validemail@gmail.com','thisisareallyreallyLongPasswordUKnowIt', 'confirmpassword', 'key');
    }).toThrowError('password must be shorter than 20 characters');
  });

  test('confirm password does not match password', () => {
    expect(() => {
      validateAdminCreation('validemail@gmail.com','validpassword', 'notvalidpassword', 'key');
    }).toThrowError('confirm password must match password');
  });

});