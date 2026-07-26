import type { CategoryDef } from './types';
import { basicsCategory } from './courses/basics';
import { programmingCategory } from './courses/programming';
import { webDevelopmentCategory } from './courses/web-development';
import { frontEndCategory, backEndCategory } from './courses/frameworks';
import { goodToKnowCategory } from './courses/tools';
import { databasesCategory } from './courses/databases';
import { mobileDevCategory } from './courses/mobile-dev';
import { ethicalHackingCategory } from './courses/ethical-hacking';
import { aiMlCategory } from './courses/ai-ml';
import { cloudCategory } from './courses/cloud';

export const ALL_CATEGORIES: CategoryDef[] = [
  basicsCategory,
  programmingCategory,
  webDevelopmentCategory,
  frontEndCategory,
  backEndCategory,
  goodToKnowCategory,
  databasesCategory,
  mobileDevCategory,
  ethicalHackingCategory,
  aiMlCategory,
  cloudCategory,
];
