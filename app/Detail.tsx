"use client"
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context"

export default function DetailScreen() {
  const router = useRouter()
  const params = useLocalSearchParams()

  // Extract params
  const { id, name, description, hours, address, image, category, details, rating, reviews, location } = params

  // Handle the image based on the id
  let imageSource
  switch (id) {
    case "1":
      imageSource = require("../assets/Pia.png")
      break
    case "2":
      imageSource = require("../assets/Gudeg.png")
      break
    case "3":
      imageSource = require("../assets/Borobudur.png")
      break
    default:
      imageSource = require("../assets/LocalHeader.png")
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#8B2323" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{name}</Text>
          <View style={styles.placeholder} />
        </View>

        <Image source={imageSource} style={styles.mainImage} />

        <View style={styles.contentContainer}>
          <View style={styles.infoRow}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{category}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>
                {rating} ({reviews} reviews)
              </Text>
            </View>
          </View>

          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{description}</Text>

          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={20} color="#8B2323" />
            <Text style={styles.infoText}>{hours}</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="location-outline" size={20} color="#8B2323" />
            <Text style={styles.infoText}>{address}</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.detailsText}>{details}</Text>

          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  placeholder: {
    width: 40,
  },
  mainImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  categoryBadge: {
    backgroundColor: "#8B2323",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  categoryText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#444",
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: "#8B2323",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  contactButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})
