import { SettingsBreadcrumb } from "@/components/BreadCrumb";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col max-w-4xl mx-auto px-4 md:px-6 paddingY space-y-4">
      <SettingsBreadcrumb />
      {children}
    </div>
  );
}
