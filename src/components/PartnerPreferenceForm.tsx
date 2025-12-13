"use client";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const PartnerPreferenceForm = () => {
  const [preferences, setPreferences] = useState({
    familyBackground: "",
    education: "",
    living: "",
    origin: "",
    height: "",
    profession: "",
    country: "",
    avoidOrigin: ""
  });

  const handlePreferenceChange = (key: string, value: string) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2">
          <Heart className="h-6 w-6 text-pink-500" />
          Partner Preferences
        </CardTitle>
        <p className="text-gray-600 mt-2">Tell us about your ideal partner</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-lg text-gray-700 leading-relaxed">
          <span className="font-medium">I'm looking for a partner from a </span>
          <div className="inline-block min-w-[280px] mx-1">
            <Select value={preferences.familyBackground} onValueChange={(value) => handlePreferenceChange("familyBackground", value)}>
              <SelectTrigger className="border-2 border-purple-200 bg-purple-50 hover:border-purple-300 transition-colors">
                <SelectValue placeholder="family background" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="lower-middle">Lower Middle Class</SelectItem>
                <SelectItem value="middle">Middle Class</SelectItem>
                <SelectItem value="upper-middle">Upper Middle Class</SelectItem>
                <SelectItem value="upper">Upper Class</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span className="font-medium"> family background, with minimum </span>
          <div className="inline-block min-w-[120px] mx-1">
            <Select value={preferences.education} onValueChange={(value) => handlePreferenceChange("education", value)}>
              <SelectTrigger className="border-2 border-purple-200 bg-purple-50 hover:border-purple-300 transition-colors">
                <SelectValue placeholder="education" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ssc">SSC</SelectItem>
                <SelectItem value="hsc">HSC</SelectItem>
                <SelectItem value="bachelor">Bachelor's</SelectItem>
                <SelectItem value="master">Master's</SelectItem>
                <SelectItem value="phd">PhD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span className="font-medium"> education level, currently living in </span>
          <div className="inline-block min-w-[150px] mx-1">
            <Select value={preferences.living} onValueChange={(value) => handlePreferenceChange("living", value)}>
              <SelectTrigger className="border-2 border-purple-200 bg-purple-50 hover:border-purple-300 transition-colors">
                <SelectValue placeholder="location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="own">Own Place</SelectItem>
                <SelectItem value="family">With Family</SelectItem>
                <SelectItem value="rental">Rental</SelectItem>
                <SelectItem value="hostel">Hostel</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-lg text-gray-700 leading-relaxed">
          <span className="font-medium">, originating from </span>
          <div className="inline-block min-w-[150px] mx-1">
            <Select value={preferences.origin} onValueChange={(value) => handlePreferenceChange("origin", value)}>
              <SelectTrigger className="border-2 border-purple-200 bg-purple-50 hover:border-purple-300 transition-colors">
                <SelectValue placeholder="city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dhaka">Dhaka</SelectItem>
                <SelectItem value="chittagong">Chittagong</SelectItem>
                <SelectItem value="sylhet">Sylhet</SelectItem>
                <SelectItem value="rajshahi">Rajshahi</SelectItem>
                <SelectItem value="khulna">Khulna</SelectItem>
                <SelectItem value="barisal">Barisal</SelectItem>
                <SelectItem value="rangpur">Rangpur</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span className="font-medium">, and having height </span>
          <div className="inline-block min-w-[140px] mx-1">
            <Select value={preferences.height} onValueChange={(value) => handlePreferenceChange("height", value)}>
              <SelectTrigger className="border-2 border-purple-200 bg-purple-50 hover:border-purple-300 transition-colors">
                <SelectValue placeholder="height range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5'0-5'4">5'0" - 5'4"</SelectItem>
                <SelectItem value="5'5-5'11">5'5" - 5'11"</SelectItem>
                <SelectItem value="6'0-6'4">6'0" - 6'4"</SelectItem>
                <SelectItem value="6'5+">6'5" and above</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-lg text-gray-700 leading-relaxed">
          <span className="font-medium">, working as </span>
          <div className="inline-block min-w-[180px] mx-1">
            <Select value={preferences.profession} onValueChange={(value) => handlePreferenceChange("profession", value)}>
              <SelectTrigger className="border-2 border-purple-200 bg-purple-50 hover:border-purple-300 transition-colors">
                <SelectValue placeholder="profession" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="service">Service</SelectItem>
                <SelectItem value="doctor">Doctor</SelectItem>
                <SelectItem value="engineer">Engineer</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="student">Student</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span className="font-medium"> in Bangladesh or living abroad in </span>
          <div className="inline-block min-w-[160px] mx-1">
            <Select value={preferences.country} onValueChange={(value) => handlePreferenceChange("country", value)}>
              <SelectTrigger className="border-2 border-purple-200 bg-purple-50 hover:border-purple-300 transition-colors">
                <SelectValue placeholder="country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Country</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="bangladesh">Bangladesh</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-lg text-gray-700 leading-relaxed">
          <span className="font-medium">and avoiding origin from </span>
          <div className="inline-block min-w-[180px] mx-1">
            <Select value={preferences.avoidOrigin} onValueChange={(value) => handlePreferenceChange("avoidOrigin", value)}>
              <SelectTrigger className="border-2 border-purple-200 bg-purple-50 hover:border-purple-300 transition-colors">
                <SelectValue placeholder="certain countries" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No Restrictions</SelectItem>
                <SelectItem value="specific">Certain Countries</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all">
            Save Preferences
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartnerPreferenceForm;