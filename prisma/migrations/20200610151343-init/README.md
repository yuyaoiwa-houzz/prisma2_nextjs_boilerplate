# Migration `20200610151343-init`

This migration has been generated by yuyaoiwa-houzz at 6/10/2020, 3:13:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" text  NOT NULL ,"name" text  NOT NULL ,
    PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200610151343-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,16 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id   String @default(cuid()) @id
+  name String
+}
```

