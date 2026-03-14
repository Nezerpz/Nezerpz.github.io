import Heading from '@/components/atoms/Heading';
import Text from '@/components/atoms/Text';
import { useTranslation } from '@/i18n';

export default function Home() {
  const { t } = useTranslation();
  const IMAGE_PATH = '/images/Headshot.png';
  const SKILLICONS_URL = 'https://skillicons.dev/icons?perline=9&i=ts,docker,git,yarn,npm,nodejs,html,css,docker,jest,sqlite,java,php,figma,react,arduino,bun,cs,idea,mysql,postman,py,rider,vite,vscode';

  return (
    <section>
      <Heading className="mb-8" level={1}>{t('aboutTitle')}</Heading>
      <div className="flex sm:flex-row flex-col items-start gap-6">
        <img
          src={IMAGE_PATH}
          alt="Headshot"
          className="w-full h-60 rounded-2xl object-cover"
        />
        <div>
          <Text>{t('aboutDescription')}</Text>
        </div>
      </div>
      <Heading level={1} className="mt-12 mb-8">{t('aboutSkillsTitle')}</Heading>

      <div className="mb-8">
        <img src={SKILLICONS_URL} alt="Skill icons" loading="lazy" decoding="async" className="w-full max-w-full object-contain" />
      </div>

    </section>
  );
}
