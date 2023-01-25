import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { RetrospectiveUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './RetrospectiveUncheckedUpdateManyWithoutWorkspaceNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const Schema: z.ZodType<Prisma.WorkspaceUncheckedUpdateWithoutLinkInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    retros: z
      .lazy(() => RetrospectiveUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema)
      .optional(),
    userId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
  })
  .strict()

export const WorkspaceUncheckedUpdateWithoutLinkInputObjectSchema = Schema