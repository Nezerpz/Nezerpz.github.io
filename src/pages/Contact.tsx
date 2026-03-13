import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import { useTranslation } from '@/i18n';

export default function Contact() {
  const { t } = useTranslation();

  const phone = t('contactPhone');
  const email = t('contactEmail');

  return (
    <section>
      <Heading level={1}>{t('contactTitle')}</Heading>

      <div className="space-y-3">
        <div>
          <Text>
            <strong>{t('contactPhoneLabel')}: </strong>
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-sky-400 hover:underline">
              {phone}
            </a>
          </Text>
        </div>

        <div>
          <Text>
            <strong>{t('contactEmailLabel')}: </strong>
            <a href={`mailto:${email}`} className="text-sky-400 hover:underline">
              {email}
            </a>
          </Text>
        </div>

        <div>
          <Text>
            <a href="/docs/CV.pdf" download className="text-sky-400 hover:underline">
              {t('contactDownloadCV')}
            </a>
          </Text>
        </div>
      </div>
    </section>
  );
}
