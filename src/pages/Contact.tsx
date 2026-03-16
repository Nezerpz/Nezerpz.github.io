import {useState } from 'react';

import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import { useTranslation } from '@/i18n';

export default function Contact() {
  const { t } = useTranslation();
  const [showPdf, setShowPdf] = useState(false);

  const phone = t('contactPhone');
  const email = t('contactEmail');
  const references = [
    // TODO: Maybe add some translations to positions and workplaces.
    {
      name: 'Vidar Fosse',
      role: 'Seniorrådgivar – Lotteri- og stiftelsestilsynet',
      phone: '+47 482 83 520',
    },
    { name: 'Girts Strazdins', role: 'CPO – Reknes', phone: '+47 968 07 699' },
  ];

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

        <div className="flex items-center space-x-4">
          <Text>
            <Button onClick={() => setShowPdf(true)}>{t('contactViewCV')}</Button>
          </Text>

          <div>
            <Text>
              <a href="/docs/CV.pdf" download className="text-sky-400 hover:underline">
                {t('contactDownloadCV')}
              </a>
            </Text>
          </div>
        </div>
      </div>

      {showPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded shadow-lg w-full max-w-4xl h-[80vh] overflow-hidden">
            <div className="flex justify-end p-2">
              <Button onClick={() => setShowPdf(false)}>Close</Button>
            </div>
            <iframe
              src="/docs/CV.pdf"
              title="CV"
              className="w-full h-[calc(100%-48px)] border-0"
            />
          </div>
        </div>
      )}

      <div className="mt-8">
        <Heading level={2}>{t('contactReferencesTitle')}</Heading>
        <div className="space-y-2 mt-2">
          {references.map((r) => (
            <div key={r.phone}>
              <Text>
                <strong>{r.name}</strong> — {r.role}:&nbsp;
                <a href={`tel:${r.phone.replace(/\s+/g, '')}`} className="text-sky-400 hover:underline">
                  {r.phone}
                </a>
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
