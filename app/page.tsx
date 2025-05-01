import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-ios-blue-50 p-4">
      <div className="max-w-2xl mx-auto text-center flex-1 flex flex-col justify-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/vpcti-logo.svg"
            alt="VPCTI Construction"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-ios-blue-800">
            New Website Coming Soon
          </h1>
          <p className="text-xl text-ios-blue-600 max-w-lg mx-auto">
            We're building an improved digital experience for you.
          </p>
          <div className="flex flex-col items-center space-y-4 pt-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-ios-blue-100">
                <Phone className="w-5 h-5 text-ios-blue-600" />
              </div>
              <a
                className="text-lg font-medium text-ios-blue-700 hover:text-ios-blue-800"
              >
                8952 0883
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-ios-blue-100">
                <Mail className="w-5 h-5 text-ios-blue-600" />
              </div>
              <a
                className="text-lg font-medium text-ios-blue-700 hover:text-ios-blue-800"
              >
                vpowerconstruction12@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-ios-blue-200 text-center">
        <p className="text-sm text-ios-blue-500">
          © 2025 VPower Construction and Trading Inc. All rights reserved.
        </p>
        <p className="text-sm text-ios-blue-400 mt-1">
          Developed by Delnard Cantor
        </p>
      </div>
    </div>
  );
}