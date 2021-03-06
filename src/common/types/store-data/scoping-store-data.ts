// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { ScopingInputTypes } from 'background/scoping-input-types';

export type SingleElementSelector = string[];

export interface ScopingStoreData {
    selectors: { [key in ScopingInputTypes]: SingleElementSelector[] };
}
