import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookForm/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ProfileLinks = () => {
  const { t } = useTranslation('profile/inputForm');

  // Define schema with translated error messages
  const formSchema = z.object({
    website: z
      .string()
      .url({
        message: t('validation.website', {
          defaultValue: 'يجب إدخال رابط موقع صحيح',
        }), // Error message for website
      })
      .optional()
      .or(z.literal('')),
    twitter: z
      .string()
      .url({
        message: t('validation.twitter', {
          defaultValue: 'يجب إدخال رابط تويتر صحيح',
        }), // Error message for twitter
      })
      .optional()
      .or(z.literal('')),
    linkedin: z
      .string()
      .url({
        message: t('validation.linkedin', {
          defaultValue: 'يجب إدخال رابط لينكدإن صحيح',
        }), // Error message for linkedin
      })
      .optional()
      .or(z.literal('')),
    youtube: z
      .string()
      .url({
        message: t('validation.youtube', {
          defaultValue: 'يجب إدخال رابط يوتيوب صحيح',
        }), // Error message for youtube
      })
      .optional()
      .or(z.literal('')),
    facebook: z
      .string()
      .url({
        message: t('validation.facebook', {
          defaultValue: 'يجب إدخال رابط فيسبوك صحيح',
        }), // Error message for facebook
      })
      .optional()
      .or(z.literal('')),
  });

  // Initialize the form with validation on change
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      website: '',
      twitter: '',
      linkedin: '',
      youtube: '',
      facebook: '',
    },
    mode: 'onChange', // Validate on change
  });

  // The function that is called when the form is submitted
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // You can add logic to submit the data here
  };

  return (
    <div className="mt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 p-5 border border-gray-200 rounded-2xl"
        >
          {/* Website field */}
          <FormField
            control={form.control}
            name="website"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>
                  {t('website', { defaultValue: 'Website' })}
                </FormLabel>
                <FormControl>
                  <Input
                    className={`p-4 border ${fieldState.error ? 'border-red-500' : 'border-gray-200'} rounded-xl`}
                    placeholder={t('websitePlaceholder', {
                      defaultValue: 'https://example.com',
                    })}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm mt-1" />
              </FormItem>
            )}
          />

          {/* Twitter field */}
          <FormField
            control={form.control}
            name="twitter"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>
                  {t('twitter', { defaultValue: 'X (Twitter)' })}
                </FormLabel>
                <FormControl>
                  <Input
                    className={`p-4 border ${fieldState.error ? 'border-red-500' : 'border-gray-200'} rounded-xl`}
                    placeholder={t('twitterPlaceholder', {
                      defaultValue: 'https://twitter.com/username',
                    })}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm mt-1" />
              </FormItem>
            )}
          />

          {/* LinkedIn field */}
          <FormField
            control={form.control}
            name="linkedin"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>
                  {t('linkedin', { defaultValue: 'LinkedIn' })}
                </FormLabel>
                <FormControl>
                  <Input
                    className={`p-4 border ${fieldState.error ? 'border-red-500' : 'border-gray-200'} rounded-xl`}
                    placeholder={t('linkedinPlaceholder', {
                      defaultValue: 'https://linkedin.com/in/username',
                    })}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm mt-1" />
              </FormItem>
            )}
          />

          {/* YouTube field */}
          <FormField
            control={form.control}
            name="youtube"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>
                  {t('youtube', { defaultValue: 'YouTube' })}
                </FormLabel>
                <FormControl>
                  <Input
                    className={`p-4 border ${fieldState.error ? 'border-red-500' : 'border-gray-200'} rounded-xl`}
                    placeholder={t('youtubePlaceholder', {
                      defaultValue: 'https://youtube.com/username',
                    })}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm mt-1" />
              </FormItem>
            )}
          />

          {/* Facebook field */}
          <FormField
            control={form.control}
            name="facebook"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>
                  {t('facebook', { defaultValue: 'Facebook' })}
                </FormLabel>
                <FormControl>
                  <Input
                    className={`p-4 border ${fieldState.error ? 'border-red-500' : 'border-gray-200'} rounded-xl`}
                    placeholder={t('facebookPlaceholder', {
                      defaultValue: 'https://facebook.com/username',
                    })}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm mt-1" />
              </FormItem>
            )}
          />

          {/* Save button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark"
          >
            {t('submit', { defaultValue: 'حفظ' })}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileLinks;
