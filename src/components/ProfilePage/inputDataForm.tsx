import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const InputDataForm = () => {
  const { t } = useTranslation('profile/inputForm');
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      headline: '',
      description: '',
      language: '',
    },
  });

  return (
    // Data Input
    <Form {...form}>
      <form className="space-y-6 p-5 border border-gray-200 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('firstName')}</FormLabel>
                <FormControl>
                  <Input
                    className="p-4 text-gray-400 border border-gray-200 rounded-xl"
                    placeholder="Label"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('lastName')}</FormLabel>
                <FormControl>
                  <Input
                    className="p-4 text-gray-400 border border-gray-200 rounded-xl"
                    placeholder="Label"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Headline */}
        <FormField
          control={form.control}
          name="headline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('headline')}</FormLabel>
              <FormControl>
                <Input
                  className="p-4 text-gray-400 border border-gray-200 rounded-xl"
                  placeholder="Label"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('description')}</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Label"
                  {...field}
                  className="w-full text-gray-400 p-4 border border-gray-200 rounded-xl min-h-[120px] bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Language */}
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('language')}</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="p-4 w-full text-gray-400 border border-gray-200 rounded-xl">
                    <SelectValue placeholder="Label" />
                  </SelectTrigger>
                  <SelectContent side="bottom">
                    <SelectItem value="en">{t('english')}</SelectItem>
                    <SelectItem value="ar">{t('arabic')}</SelectItem>
                    <SelectItem value="fr">{t('french')}</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default InputDataForm;
