import LMS from "../../../assets/LMS.jpg";
import Weather from "../../../assets/weather-apps.avif";
import SmartCart from "../../../assets/smart cart.jpg";
import { CardStyle } from "./CardConstant";

export default function MasterCard() {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {/* Supermarket Dashboard Card */}
      <div
        className="card-hover"
        style={{
          ...CardStyle.card,
        }}
      >
        <div className="aspect-[6/3] overflow-hidden">
          <img
            src={SmartCart}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            alt="Supermarket Dashboard"
          />
        </div>
        <div className="p-6">
          <h3 style={CardStyle.Text}>Dashboard for Supermarket</h3>
          <p className="text-[var(--color-gray)]">
            {CardStyle.content.SmartCart}
          </p>
        </div>
      </div>

      {/* Weather App Card */}
      <div
        className="card-hover"
        style={{
          ...CardStyle.card,
        }}
      >
        <div className="aspect-[6/3] overflow-hidden">
          <img
            src={Weather}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            alt="Weather App"
          />
        </div>
        <div className="p-6">
          <h3 style={CardStyle.Text}>Weather App</h3>
          <p className="text-[var(--color-gray)]">
            {CardStyle.content.Weather}
          </p>
        </div>
      </div>

      {/* LMS Dashboard Card */}
      <div
        className="card-hover"
        style={{
          ...CardStyle.card,
        }}
      >
        <div className="aspect-[6/3] overflow-hidden">
          <img
            src={LMS}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            alt="LMS Dashboard"
          />
        </div>
        <div className="p-6">
          <h3 style={CardStyle.Text}>Dashboard for LMS</h3>
          <p className="text-[var(--color-gray)]">{CardStyle.content.LMS}</p>
        </div>
      </div>
    </div>
  );
}
