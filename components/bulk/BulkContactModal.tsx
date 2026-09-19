"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { SITE } from "@/lib/constants/site";
import { whatsappBulkHref } from "@/lib/utils/whatsapp";

type BulkContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export function BulkContactModal({ open, onClose }: BulkContactModalProps) {
  return (
    <Modal open={open} onClose={onClose} title="Planning a function?">
      <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
        Tell us what you&apos;re planning and we&apos;ll discuss the details with you.
        No online form — just a call or a WhatsApp message.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          href={SITE.phoneHref}
          variant="primary"
          size="lg"
          className="w-full sm:flex-1"
        >
          Call
        </Button>
        <Button
          href={whatsappBulkHref()}
          external
          variant="secondary"
          size="lg"
          className="w-full sm:flex-1"
        >
          WhatsApp
        </Button>
      </div>
    </Modal>
  );
}
