import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { InviteUncheckedUpdateManyWithoutRetroNestedInputObjectSchema } from './InviteUncheckedUpdateManyWithoutRetroNestedInput.schema'
import { ItemCollectionUncheckedUpdateManyWithoutRetrospectivesNestedInputObjectSchema } from './ItemCollectionUncheckedUpdateManyWithoutRetrospectivesNestedInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { RetroItemUncheckedUpdateManyWithoutRetrospectiveNestedInputObjectSchema } from './RetroItemUncheckedUpdateManyWithoutRetrospectiveNestedInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { UserUncheckedUpdateManyWithoutRetrospectivesNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutRetrospectivesNestedInput.schema'

const Schema: z.ZodType<Prisma.RetrospectiveUncheckedUpdateWithoutLinkInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    date: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    invite: z.lazy(() => InviteUncheckedUpdateManyWithoutRetroNestedInputObjectSchema).optional(),
    itemCollections: z
      .lazy(() => ItemCollectionUncheckedUpdateManyWithoutRetrospectivesNestedInputObjectSchema)
      .optional(),
    items: z
      .lazy(() => RetroItemUncheckedUpdateManyWithoutRetrospectiveNestedInputObjectSchema)
      .optional(),
    phase: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    participants: z
      .lazy(() => UserUncheckedUpdateManyWithoutRetrospectivesNestedInputObjectSchema)
      .optional(),
    timerExpiration: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    workspaceId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const RetrospectiveUncheckedUpdateWithoutLinkInputObjectSchema = Schema