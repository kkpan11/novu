import { IPreferenceChannels } from '@novu/shared';

import type { OrganizationId } from '../organization';
import type { EnvironmentId } from '../environment';
import type { ChangePropsValueType } from '../../types';
import { WorkflowOverrideId } from './types';
import { NotificationGroupEntity } from '../notification-group';
import { TenantEntity } from '../tenant';

export class WorkflowOverrideEntity {
  _id: WorkflowOverrideId;

  _organizationId: OrganizationId;

  _environmentId: EnvironmentId;

  _workflowId: string;

  readonly workflow?: NotificationGroupEntity;

  _tenantId: string;

  readonly tenant?: TenantEntity;

  active: boolean;

  preferenceSettings: IPreferenceChannels;

  deleted: boolean;

  deletedAt?: string;

  deletedBy?: string;

  createdAt?: string;

  updatedAt?: string;
}

export type WorkflowOverrideDBModel = ChangePropsValueType<
  WorkflowOverrideEntity,
  '_environmentId' | '_organizationId' | '_workflowId' | '_tenantId'
>;
