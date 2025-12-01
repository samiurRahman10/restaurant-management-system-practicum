import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('email'); // 'email' or 'reset'
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    // TODO: API CALL - STEP 1: Send password reset email
    // TODO: import apiService from '../services/apiService';
    // TODO: try {
    // TODO:   await apiService.auth.forgotPassword(email);
    // TODO:   setSuccess('Password reset code sent to your email');
    // TODO:   setStep('reset');
    // TODO: } catch (err) {
    // TODO:   setError(err.message || 'Failed to send reset code');
    // TODO: } finally {
    // TODO:   setLoading(false);
    // TODO: }
    
    // CURRENT: Mock email verification - remove when API is ready
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess('Password reset code sent to your email');
      setStep('reset');
    }, 1500);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setError('');

    if (!resetCode || !newPassword || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // TODO: API CALL - STEP 2: Reset password with code
    // TODO: import apiService from '../services/apiService';
    // TODO: try {
    // TODO:   await apiService.auth.resetPassword(email, resetCode, newPassword);
    // TODO:   setSuccess('Password reset successful! Redirecting to login...');
    // TODO:   setTimeout(() => navigate('/login'), 1500);
    // TODO: } catch (err) {
    // TODO:   setError(err.message || 'Failed to reset password');
    // TODO: } finally {
    // TODO:   setLoading(false);
    // TODO: }
    
    // CURRENT: Mock password reset - remove when API is ready
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess('Password reset successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Reset Password</h1>
        <p className="text-center text-gray-600 mb-8">Recover your restaurant account access</p>

        {step === 'email' ? (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {success && (
              <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                {success}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="admin@restaurant.com"
                disabled={loading}
              />
            </div>

            <p className="text-sm text-gray-600">
              We'll send a password reset code to your email address.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Reset Code'}
            </button>
          </form>
        ) : (
          <form onSubmit={handlePasswordReset} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {success && (
              <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                {success}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reset Code
              </label>
              <input
                type="text"
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter code from email"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>

            <button
              type="button"
              onClick={() => setStep('email')}
              className="w-full text-orange-500 font-semibold hover:underline"
            >
              Back to Email
            </button>
          </form>
        )}

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            Remember your password? <Link to="/login" className="text-orange-500 font-semibold hover:underline">Sign In</Link>
          </p>
          <p className="text-center text-gray-600 text-sm mt-3">
            Don't have an account? <Link to="/register" className="text-orange-500 font-semibold hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
