"use client";

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
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
        WhatsApp us anytime — phone and hours are listed in the footer.
      </p>
      <div className="mt-6">
        <Button
          href={whatsappBulkHref()}
          external
          variant="primary"
          size="lg"
          className="w-full"
        >
          WhatsApp Us
        </Button>
      </div>
    </Modal>
  );
}
