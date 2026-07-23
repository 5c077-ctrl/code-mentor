import type { CategoryDef } from './types';
import { programmingCategory } from './courses/programming';
import { webDevelopmentCategory } from './courses/web-development';
import { devopsCategory } from './courses/devops';
import { databasesCategory } from './courses/databases';
import { ethicalHackingCategory } from './courses/ethical-hacking';
import { aiMlCategory } from './courses/ai-ml';
import { mobileDevCategory } from './courses/mobile-dev';
import { cloudCategory } from './courses/cloud';

export const ALL_CATEGORIES: CategoryDef[] = [
  programmingCategory,
  webDevelopmentCategory,
  devopsCategory,
  databasesCategory,
  ethicalHackingCategory,
  aiMlCategory,
  mobileDevCategory,
  cloudCategory,
];
