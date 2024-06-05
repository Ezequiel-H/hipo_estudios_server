/* eslint-disable max-len */
import User from '../models/user.model.js';

export const getUserById = async (userId) => User.findById(userId);
export const getUserByEmail = async (email) => User.findOne({ email });

export const validateUserPassword = (password1, password2) => (password1 === password2);
