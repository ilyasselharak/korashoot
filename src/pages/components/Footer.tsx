import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="py-5 footer">
      <div className="flex justify-center ">
        <Image src={"/korashot-logo.png"} width={200} height={250} alt="logo" />
      </div>
      <div className="flex text-lg gap-x-5 mt-2 justify-center">
        <Link href={"/contactUs"}>
          <span>اتصل بنا</span>
        </Link>
        <span>|</span>
        <Link href={"/aboutUs"}>
          <span>من نحن</span>
        </Link>
        <span>|</span>
        <Link href={"/termPrivacy"}>
          <span>إعدادات الخصوصية</span>
        </Link>
        <span>|</span>
        <Link href={"/PrivacyPolicy"}>
          <span>سياسة الخصوصية</span>
        </Link>
      </div>
      <div className="flex gap-x-1 mt-4 justify-center">
        <span>جميع الحقوق محفوظة</span>
        <Link href={"/"}>كورة شوت &#169; 2022</Link>
        <span>
          المعلومات الواردة في korashot يجب أن لا تنشر, تبث, تعاد كتابتها أو
          توزيعها من دون اذن مسبق من korashot
        </span>
      </div>
    </div>
  );
}
