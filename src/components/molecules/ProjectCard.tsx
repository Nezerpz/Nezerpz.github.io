import { ReactNode, useState } from 'react';

import Lightbox from '@/components/atoms/Lightbox';

export interface ProjectCardProps {
  title: string;
  description?: string;
  link?: string;
  image?: string; // optional image URL
  imageLink?: string; // optional separate link for the image
  children?: ReactNode;
}

export default function ProjectCard({ title, description, link, image, imageLink, children }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <article className="npz-card">
      {image && (
        <div className="mb-3">
          <button onClick={() => setOpen(true)} className="w-full block">
            <img
              src={image}
              alt={`${title} thumbnail`}
              className="w-full h-40 object-cover rounded-md"
            />
          </button>

          {imageLink && (
            <div className="mt-2">
              <a
                href={imageLink}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-sky-400 hover:underline"
              >
                Open project image / repo
              </a>
            </div>
          )}
        </div>
      )}
      <h3 className="npz-card__title">{title}</h3>
      {description && <p className="npz-card__desc">{description}</p>}
      {children}
      {link && (
        <p>
          <a className="underline" href={link} target="_blank" rel="noreferrer">
            View
          </a>
        </p>
      )}

      {open && image && <Lightbox src={image} alt={title} onClose={() => setOpen(false)} />}
    </article>
  );
}
