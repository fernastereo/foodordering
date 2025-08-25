import bcrypt from 'bcryptjs';
import { model, models, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 8) {
          new Error('Password must be at least 8 characters long');
          return false
        }
      },
    },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.post('validate', function (user) {
  user.password = bcrypt.hashSync(user.password, 10);
});

export const User = models?.User || model('User', UserSchema);
